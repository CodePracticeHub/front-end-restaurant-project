import React from "react";
import ErrorBoundary from "../ErrorComponents/ErrorBoundary.tsx";
import { ReservationDetails } from "./Types";
import { SpinnerLoading } from "../utils/SpinnerLoading.tsx";
import "./ReservationRevStyle.css"


export default function ReservationRev() {


  const [ReservDetails , setReservDetails] = React.useState<ReservationDetails | null>(null)
  const [isLoading , setIsLoading] = React.useState(false)
  const [Error , setError] = React.useState()

  // Redirect user to the Previous page
  const HeadToPreviousPage = ():void => {
    // implement the code
  }
  
  // Redirect user to the Payment page
  const NextPage = ():void => {
    // implement the code
  }

  React.useEffect(() => {

      const FetchData = async () => {

        try {
            setIsLoading(true)
            const data = await fetch("https://jsonplaceholder.typicode.com/users") // this api just to test 
             
            // Convert data to json
            const Data_as_json:{} = await data.json();
            
            // setReservDetails(Data_as_json)

          }
          catch(e:any) {
            setError(e)
          }
          finally{
            setIsLoading(false)
          }       
      }    
      
      FetchData()

    }    , [])



  // this code will work in case smt happeneed with fetching data
  if(Error){
    return  <ErrorBoundary/>
  }

  // this will show in case data took a long period of time to be fetched
  if(isLoading){
    return  <SpinnerLoading/>
  }






  return (
    <div>
      
      <div className="Page-Top"> <img src="images/logo-steakbuds-1000-x-285-20.png" alt="Logo" /> </div>

      <div id="container">
        
        {/* left section */}
        
        <div className="Left-Side" onClick={HeadToPreviousPage}>
          <span className="iconAndtext">
          <img className="Back-icon"  width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/left.png" alt="left"/>     
          <span>Back</span>     
          </span>
        </div>



        {/* right section */}

        <div className="right-side">

          <div className="sub-container">
            <h2><b>Reservation Review</b></h2>

            <span>Reservation informations</span>
            <div className="infos-box first-box">
              <div className="label-box">
                <p> Date     </p>
                <p>Time </p>
                <p>Number of seats </p>
                <p>Location           </p>
              </div>
              <div className="data-box">
                <p>- **************     </p>
                <p>- *******     </p>
                <p>- ********     </p>
                <p>- *********     </p>
              </div>             
            </div>

            <span>Guest informations</span>
            <div className="infos-box second-box">
              <div className="label-box">
                <p> Name     </p>
                <p>email </p>
                <p>Contact Number </p>
              </div>
              <div className="data-box">
                <p>-  Omar abroum    </p>
                <p>-  ********    </p>
                <p>-  ************    </p>
              </div>             
            </div>
            
            <span>Payment informations</span>
            <div className="infos-box third-box">
              <div className="label-box">
                <p> Card Number     </p>
                <p>Card holder name </p>
                <p>CVC </p>
                <p>Expiration date           </p>
              </div>
              <div className="data-box">
                <p>-sssssssssssss   </p>
                <p>-****     </p>
                <p>-******     </p>
                <p>-*******     </p>
              </div>             
            </div>
            
            <button onClick={NextPage} className="btn">Procced to Payment</button>
          </div>

        </div>

      
      
      
      
      
      </div> 

    
      <footer className="Res-page-footer" style={{backgroundColor:"#111114"}}>
        <img className="Bottom-logo" src="images/logo-steakbuds-1000-x-285-21.png" alt="bottomPageLogo" />
        <p>Helpline: 873487324</p>
        <p>Email us: Help@steakbuds.com</p>
      </footer>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}