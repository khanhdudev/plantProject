import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductPage.module.css';
import {Card , CardBody , CardTitle , CardText , Button , CardSubtitle} from 'reactstrap';

let listFilterPrice = [
   {id : 1 , price : 'lower 100.000VND'},
   {id : 2 , price : '100.000VND - 500.000VND'},
   {id : 3 , price : '500.000VND - 2.000.000VND'},
   {id : 4 , price : 'higher 2.000.000VND'}
]

let listClassProduct : {id: number , class: string}[]= [
   {id : 1 , class : 'Desktop Products'},
   {id : 2 , class : 'Big Size'},
   {id : 3 , class : 'Easy to grow'},
   {id : 4 , class : 'Advance product'},
   {id : 5 , class : 'Aquatic plant'}
]

let listClassShow : {id: number , class: string}[]= [
   {id : 1 , class : 'New Products'},
   {id : 2 , class : 'Oldest Products'},
   {id : 3 , class : 'Price increase'},
   {id : 4 , class : 'prices decrease '}
]
function ProductPage() {
   const [checked , setChecked] = useState<any>();
   const [classifyChecked , setClassifyChecked] = useState<number>()
   
   const [listProduct , setListProduct] = useState<any>([])
   
   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/album/1/photos')
      .then(result => result.json())
      .then(products => setListProduct(products))
   }, []);

   console.log(listProduct);
   
   return (
      <div className='container'>
         <div className={`${styles['row']}`}>
            {/* Information */}
            <div className={`${styles['r-border']} col-md-3`}>
               <div>
                  <h4>About Us</h4>
                  <div className={`${styles['d-column']} my-3`}>
                     <Link to='/' className={`${styles['link-item']} my-2`}>Home Page</Link>
                     <Link to='/product' className={`${styles['link-item']} my-2`}>Product</Link>
                     <Link to='/contact' className={`${styles['link-item']} my-2`}>Contact Us</Link>
                  </div>
               </div>

               <hr />
               
               <div>
                  <h4>About Price</h4>
                  <div className={`${styles['d-column']} my-3`}>
                     {listFilterPrice.map(prices =>{
                        // console.log(prices);
                        return <div className='my-3' key={prices.id}>
                           <input type='checkbox' id={`${prices.id}`} 
                              checked ={checked === prices.id}
                              onChange ={() => setChecked(prices.id)}
                           /> <label htmlFor={`${prices.id}`}>{prices.price}</label>                              
                        </div>
                     })}
                  </div>
               </div>

               <div>
                  <h4>Classify</h4>
                  <div className={`${styles['d-column']} my-3`}>
                     {listClassProduct.map(classify =>{
                        return <div className='my-3'key={classify.id}>
                           <input type='checkbox' id={`${classify.id}`} 
                              checked={classifyChecked === classify.id}
                              onChange={() => setClassifyChecked(classify.id)}
                           /> <label htmlFor={`${classify.id}`}>{classify.class}</label>                            
                        </div>
                     })}
                  </div>
               </div>
            </div>

            {/* content product */}
            <div className='col-md-9'>
               {/* select classify products */}
               <div className={`${styles['d-row']} ${styles['bottom-border']} my-2 px-2`}>
                  Priority preview:
                  {listClassShow.map(classify =>{
                     return <div className='mx-3'key={classify.id}>
                        <input type='checkbox' id={`${classify.id}`} 
                           checked={classifyChecked === classify.id}
                           onChange={() => setClassifyChecked(classify.id)}
                        /> <label htmlFor={`${classify.id}`}>{classify.class}</label>                            
                     </div>
                  })}
               </div>
               {/* show product */}
               <div className={`${styles['d-row']} my-2`}>
                  {listProduct.map((product: any)=>{
                     return(
                        <div className="col-md-4 px-2" key={product.id}>
                           <Card>  
                              <CardBody>
                                 <CardTitle tag="h5">
                                    {product.title}
                                 </CardTitle>
                                 <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                 >
                                    Card subtitle
                                 </CardSubtitle>
                                 <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                 </CardText>
                                 <Button>
                                    Button
                                 </Button>
                              </CardBody>
                           </Card>
                        </div>
                     )
                  })}
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProductPage;