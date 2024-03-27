export default function CustomerHome(){   
    return(
       <>
        <div className="row lg-12">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"><b>Link Account</b></h5>
            
            <a href="/link" className="btn btn-primary">Link</a>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"><b>Book Vehicle</b></h5>
            
            <a href="/getactive" className="btn btn-success">Book</a>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <p></p>
      </div>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"><b>Return Vehicles</b></h5>
            
            <a href="/vehicles/return" className="btn btn-info">Return</a>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"><b>DeActivate Account</b></h5>
            
            <a href="/deactivate" className="btn btn-danger">Deactivate</a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"><b>Logout</b></h5>
            
            <a href="/logout" className="btn btn-success">Logout</a>
          </div>
        </div>
      </div>
    
</>
        
    )
};