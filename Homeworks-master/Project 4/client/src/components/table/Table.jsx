import React from "react";
import { Link } from "react-router-dom";
import "./Table.css";

const TableRow = ({ id, titles, tDatas, remove, match }) => {
  return (
    <div className="row">
      {tDatas.map((tdataText, ind) => (
        <div key={ind} className="cell" data-title={titles[ind]}>
          {tdataText}
        </div>
      ))}
      <div className="cell">
        <Link to={`${match.url}/${id}`}>
          <button className="table-btn">
            <span className="lnr lnr-text-align-left" />
            Details
          </button>
        </Link>
      </div>
      <div className="cell">
        <button className="table-btn" onClick={() => remove(id)}>
          <span className="lnr lnr-trash" />
          Remove
        </button>
      </div>
    </div>
  );
};

const Table = ({ items, tHeads, remove, match, loading }) => {
  return (
    <div className="limiter">
      <div className="container-table100">
        <div className="wrap-table100">
          <div className="table">
            <div className="row header">
              {tHeads.map((theadText, ind) => (
                <div className="cell" key={ind}>
                  {theadText}
                </div>
              ))}
              <div className="cell" />
              <div className="cell">
                <span
                  className={`${loading &&
                    "loading-msg-visible"} loading-msg lnr lnr-checkmark-circle`}
                >
                  Removed
                </span>
              </div>
            </div>

            {items &&
              items.map(item => {
                const tDatas = [];
                tHeads.forEach(th => tDatas.push(item[th]));
                return (
                  <TableRow
                    key={item.id}
                    id={item.id}
                    titles={tHeads}
                    tDatas={tDatas}
                    remove={remove}
                    match={match}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
