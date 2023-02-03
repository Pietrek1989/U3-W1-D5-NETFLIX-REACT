import { Button, Form } from "react-bootstrap";

const ProfilePage = (props) => {
    return (
        <div className="user-body">
          <div id="user-window">
            <div className="container mx-10 px-0">
                <div className="d-flex h1">
                    <h1>Edit Profile</h1>
                    <div className="w-20"></div>
                </div>
                
                <div className="row">
                <div className="user-wrapper col-4"><img src={props.avatar} alt="avatar"/>
                </div>
                <div className="user-info-wrapper col-8">
                    <input type="text" className="bg-secondary text-white px-2 py-1" value="Strive Student" />
                    <br></br>
                    <label for="dropdown-menu" className="pt-4">Language:</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                          <Button className=" btn-outline-secondary dropdown-toggle py-1" data-toggle="dropdown" aria-expanded="false">English</Button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="htttps://google.com">German</a>
                            <a className="dropdown-item" href="htttps://google.com">Polish</a>
                          </div>
                        </div>
                      </div>
                      <hr></hr>
                      <h6>Maturity Settings:</h6>
                      <Button variant="secondary ">ALL MATURITY RATINGS</Button><br></br>
                      <p className="pt-3 pb-0"><small>Show titles of all maturity ratings for this profile</small></p><br></br>
                      <Button variant="light">EDIT</Button>
                      <hr/>
                      <h6>Autoplay controls</h6>
                      <Form className="form-check">
                      <Form.Check 
        type="checkbox"
        id="default-checkbox"
        label="Autoplay next episode in a series on all devices."
      />
                                           <Form.Check 
        type="checkbox"
        id=" Autoplay previews while browsing on all devices."
        label="Autoplay previews while browsing on all devices."
      />
                      </Form>
                     
    
                </div>
    
                </div>
                <div className="d-flex justify-content-around">
                    <Button variant="secondary" className="my-3">SAVE</Button>
                    <Button variant="light" className=" my-3">CANCEL</Button>
                    <Button  variant="light" className=" my-3">DELETE PROFILE</Button>
                </div>
            </div>
          </div>
          </div>
    )
}

export default ProfilePage;