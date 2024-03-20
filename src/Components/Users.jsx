import classNames from "classnames"
import "./Users.scss"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Users({ data, deleteItem }) {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="Users">
      {data.map((user) => {
        return (
          <div className={classNames("Users-item", {
            "Users-item_active": activeId === user.id,
          })}
            key={user.id}
            onClick={() => setActiveId(user.id)}
          >
            <h2 className="Users-title">{user.full_name}
            </h2>
            <span>Email: {user.email}</span>
            <p className="Users-description">{user.about}</p>
            {activeId === user.id && (
              <>
                <Link to={`${user.id}`}>Edit</Link>
                <button className="Users-delete" onClick={() => deleteItem(user.id)}>Delete</button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
    }
