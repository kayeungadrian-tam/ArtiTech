import { Button } from "../button/button";
import { Spinner } from "../spinner/spinner";

import "../../assets/css/header.css";

type User = {
  displayName: string;
  email: string;
  photoURL: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

const showSignInModal = () => {
  console.log("showSignInModal");
  const favDialog = document.getElementById("sign-up-dialog");
  favDialog?.showModal();
};

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <header>
    <div className="flex flex-row justify-around">
      <div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
      </div>
      <h1>ArtiTech</h1>
      <div className="flex flex-row justify-around">
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.displayName}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button
              id="test-button"
              primary={true}
              size="small"
              onClick={showSignInModal}
              label="Sign up"
            />
          </>
        )}
      </div>
    </div>
    <dialog id="sign-up-dialog">
      <form>
        <p>
          <label>
            Favorite animal:
            <select>
              <option value="default">Choose…</option>
              <option>Brine shrimp</option>
              <option>Red panda</option>
              <option>Spider monkey</option>
            </select>
          </label>
        </p>
        <div>
          {/* <button value="cancel" formmethod="dialog"> */}
          {/* Cancel */}
          {/* </button> */}
          {/* <button id="confirmBtn" value="default"> */}
          {/* Confirm */}
          {/* </button> */}
        </div>
      </form>
    </dialog>
  </header>
);
