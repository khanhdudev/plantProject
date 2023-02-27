import styles from'./Jumbotron.module.css';

function Jumbotron() {

   return (
      <div>
         <div className={`container-fluid ${styles.jumbotron} p-5`}>
            <div className="container">
               <div className={`row ${styles['row-header']}`}>
                  <div className="p-5 col-12 col-sm-6">
                     <h1 className="display-4 fw-bold">Title Imange</h1>                     
                     <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Jumbotron;