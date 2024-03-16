import React from "react";
import ErrorBoundary from "../ErrorComponents/ErrorMessagePopup.tsx";
import { SpinnerLoading } from "../utils/SpinnerLoading.tsx";
import "./ReservationRevStyle.css";
import TopPage from "../Top-and-Bottom-comp/TopPage.tsx";
import BottomPage from "../Top-and-Bottom-comp/BottomPage.tsx";
import {  useNavigate } from "react-router-dom";
import { ReservationRevDetails } from "../../Models/ReservationModal.ts";
// import TopPage from "../Top-and-Bottom-comp/TopPage.tsx";
// import BottomPage from "../Top-and-Bottom-comp/BottomPage.tsx";
import { Link } from "react-router-dom";

// NOTE: IN CASE YOU WANNA SEE HOW THIS COMPONENT LOOKS LIKE
// IMPORT THIS COMP IN index.tsx and run it

export default function ReservationRev() {

  
  // const [ReservDetails, setReservDetails] =
  //   React.useState<ReservationDetails | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [Error, setError] = React.useState();
  const Navigate = useNavigate()

  // Redirect user to the Previous page
  const HeadToPreviousPage = (): void => {

    Navigate("/guest-reserv")
  };

  // Redirect user to the Payment page
  const NextPage = (): void => {

    Navigate("/payments")
  };

  React.useEffect(() => {
    const FetchData = async () => {
      try {
        setIsLoading(true);
        // const data = await fetch("https://jsonplaceholder.typicode.com/users");
        // this api just to test

        // Convert data to json
        // const Data_as_json: {} = await data.json();

        // setReservDetails(Data_as_json)
        
      } catch (e: any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    FetchData();
  }, []);

  // this code will work in case smt happened with fetching data
  if (Error) {
    return <ErrorBoundary />;
  }

  // this will show in case data took a long period of time to be fetched
  if (isLoading) {
    return <SpinnerLoading />;
  }

  return (
    <div>
      {/* <TopPage /> */}

      <div id="container">
        {/* left section */}

        <div className="Left-Side" onClick={HeadToPreviousPage}>
          <span className="iconAndtext">
            <img
              className="Back-icon"
              width="20"
              height="20"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/left.png"
              alt="left"
            />
            Back
          </span>
        </div>

        {/* right section */}

        <div className="right-side">
          <div className="sub-container">
            <h2>
              <b>Reservation Review</b>
            </h2>

            <span>Reservation Information</span>
            <div className="infos-box first-box">
              <div className="label-box">
                <p> Date </p>
                <p>Time </p>
                <p>Number of seats </p>
                <p>Location </p>
              </div>
              <div className="data-box">
                <p>- ************** </p>
                <p>- ******* </p>
                <p>- ******** </p>
                <p>- ********* </p>
              </div>
            </div>

            <span>Guest Information</span>
            <div className="infos-box second-box">
              <div className="label-box">
                <p>Name </p>
                <p>Email </p>
                <p>Contact Number </p>
              </div>
              <div className="data-box">
                <p>- Omar abroum </p>
                <p>- ******** </p>
                <p>- ************ </p>
              </div>
            </div>

            <span>Payment Information</span>
            <div className="infos-box third-box">
              <div className="label-box">
                <p> Card Number </p>
                <p>Card holder name </p>
                <p>CVC </p>
                <p>Expiration date </p>
              </div>
              <div className="data-box">
                <p>-sssssssssssss </p>
                <p>-**** </p>
                <p>-****** </p>
                <p>-******* </p>
              </div>
            </div>

            <button onClick={NextPage} className="btn">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>

      {/* <BottomPage /> */}
    </div>
  );
}
