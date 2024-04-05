export default function AdminHome(){
    return(
        <>
         <div className="row lg-12">
           <div className="col-md-6">
             <div className="card">
                 <div className="card-body">
                   <h5 className="card-title"><b>Add Customer</b></h5>
                   <a href="/addcustomer" className="btn btn-primary">ADD</a>
                 </div>
               </div>
            </div>
       <div className="col-lg-6">
         <div className="card">
           <div className="card-body">
             <h5 className="card-title"><b>Delete Customer</b></h5>
             
             <a href="/deletecustomer" className="btn btn-success">Delete</a>
           </div>
         </div>
       </div>
       <div className="col-lg-12">
         <p></p>
       </div>
       <div className="col-lg-6">
         <div className="card">
           <div className="card-body">
             <h5 className="card-title"><b>View Customers</b></h5>
             
             <a href="/viewcustomer" className="btn btn-info">View</a>
           </div>
         </div>
       </div>
       
     </div>
     
     
 </>
         
     )
};