import styles from'./Jumbotron.module.css';

function Jumbotron() {

   return (
      <div>
         <div className={`container-fluid ${styles.jumbotron} ${styles['top-bot-color']} p-5`}>
            <div className="container">
               <div className={`row ${styles['row-header']}`}>
                  <div className="p-5 col-12 col-sm-6">
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Jumbotron;