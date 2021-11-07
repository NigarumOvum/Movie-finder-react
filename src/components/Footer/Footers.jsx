import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Gradient from 'rgt'

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">

          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
              <h5> <Gradient dir="left-to-right" from="#00DFD8" to="#7300E6"> <a href="#!">Terms & Conditions</a></Gradient></h5> 
              </li>
              <li className="list-unstyled">
              <h5> <Gradient dir="left-to-right" from="#00DFD8" to="#7300E6"> <a href="#!">Contact</a></Gradient></h5> 
              </li>

            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} <h5><Gradient dir="left-to-right" from="#00DFD8" to="#7300E6"> Copyright: <a href="https://www.neighbordevcr.com"> NeighborDev CR </a> </Gradient></h5> 
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;