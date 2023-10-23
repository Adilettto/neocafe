import React, { useState } from "react";
import styles from "./Table.module.scss";
import { CaretDownOutlined } from "@ant-design/icons";
import { Pagination } from "antd";

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(2);

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>№</th>
            <th>Наименование</th>
            <th className={styles.table__categoryTh}>
              Категория <CaretDownOutlined />
            </th>
            <th>Состав блюда и граммовка</th>
            <th>Стоимость</th>
            <th>
              Филиал <CaretDownOutlined />
            </th>
          </tr>
        </thead>
        <td colSpan="6">
          <div className={styles.table__hrLine}></div>
        </td>
        <tbody>
          <tr>
            <td>№1</td>
            <td>Капучино</td>
            <td>Кофе</td>
            <td>Молоко (70 мл), Кофе (15 зерен), Во...</td>
            <td>Молоко (70 мл), Кофе (15 зерен), Во...</td>
            <td>№NeoCafe Dzerzhinka</td>
          </tr>
          <tr>
            <td>№1</td>
            <td>Капучино</td>
            <td>Кофе</td>
            <td>Молоко (70 мл), Кофе (15 зерен), Во...</td>
            <td>Молоко (70 мл), Кофе (15 зерен), Во...</td>
            <td>№NeoCafe Dzerzhinka</td>
          </tr>
          <tr>
            <td>№1</td>
            <td>Капучино</td>
            <td>Кофе</td>
            <td>Молоко (70 мл), Кофе (15 зерен), Во...</td>
            <td>Молоко (70 мл), Кофе (15 зерен), Во...</td>
            <td>№NeoCafe Dzerzhinka</td>
          </tr>
          <tr>
            <td>№1</td>
            <td>Капучино</td>
            <td>Кофе</td>
            <td>Молоко (70 мл), Кофе (15 зерен), Во...</td>
            <td>Молоко (70 мл), Кофе (15 зерен), Во...</td>
            <td>№NeoCafe Dzerzhinka</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.paginationContainer}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={10}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Table;
