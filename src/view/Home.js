import React, { useCallback, useEffect, useMemo, useState } from "react";
import MainLayout from "../layout/MainLayout";
import { AgGridReact } from "@ag-grid-community/react";
import { ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import ReactInput from "../app/components/ReactInput";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const Home = () => {
  const [bookData, setBookData] = useState([]);
  const [authorData, setAuthorData] = useState([]);
  const [authorName, setAuthorName] = useState("");
  const [colDefs] = useState([
    {
      field: "ratings_average",
      headerName: "Average Ratings",
      flex: 1,
      sortable: true,
      cellEditor: "agTextCellEditor",
    },
    {
      field: "author_name",
      headerName: "Author Name",
      flex: 1,
      sortable: true,
      cellEditor: "agTextCellEditor",
      filter: "agSetColumnFilter",
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      sortable: true,
      cellEditor: "agTextCellEditor",
    },
    {
      field: "first_publish_year",
      headerName: "Published Year",
      flex: 1,
      sortable: true,
      cellEditor: "agTextCellEditor",
    },
    {
      field: "subject",
      headerName: "Subject",
      flex: 1,
      sortable: true,
      cellEditor: "agTextCellEditor",
    },
    {
      field: "birth_date",
      headerName: "Author Birth Date",
      flex: 1,
      sortable: true,
      cellEditor: "agTextCellEditor",
    },
    {
      field: "top_work",
      headerName: "Author Top Work",
      flex: 1,
      sortable: true,
      cellEditor: "agTextCellEditor",
    },
  ]);

  const fetchAuthorData = async () => {
    try {
      const data = await fetch(
        `https://openlibrary.org/search/authors.json?q=*`
      );
      const resData = await data.json();

      setAuthorData(resData.docs);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAuthorData();
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetch(
        authorName.length !== 0
          ? `https://openlibrary.org/search.json?author=${authorName}&sort=new`
          : `https://openlibrary.org/search.json?author=*&sort=new`
      );
      const resData = await data.json();

      const mergedData = resData.docs.map((book) => {
        if (book.author_key && book.author_key.length > 0) {
          const author = authorData?.find(
            (author) => author.key === `${book.author_key[0]}`
          );
          return {
            ...book,
            birth_date: author ? author.birth_date : "",
            top_work: author ? author.top_work : "",
          };
        }
        return book;
      });

      setBookData(mergedData);
    } catch (err) {
      console.log(err);
    }
  }, [authorData, authorName]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      editable: true,
    };
  }, []);

  const paginationPageSize = 10;
  const pagination = true;
  const paginationAutoPageSize = false;
  const paginationPageSizeSelector = [10, 50, 100];

  return (
    <MainLayout>
      <div className="my-4">
        <div className="d-flex gap-3">
          <ReactInput
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder={"Search By Author"}
            inputClassName={"authorSearchIn"}
          />
        </div>
        <div className="ag-theme-quartz mt-4" style={{ height: 500 }}>
          <AgGridReact
            rowData={bookData}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
            pagination={pagination}
            paginationPageSize={paginationPageSize}
            paginationAutoPageSize={paginationAutoPageSize}
            paginationPageSizeSelector={paginationPageSizeSelector}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
