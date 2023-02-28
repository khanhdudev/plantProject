import React , { useEffect, useState } from 'react';
import {Card , CardBody , CardTitle , CardText , Button , CardSubtitle, CardImg} from 'reactstrap';
import ReactPaginate from 'react-paginate';

function PaginationComponent( props: any ) {
   const data= props.props;
   // We start with an empty list of items.
   const [currentItems, setCurrentItems] = useState<any>([]);
   const [pageCount, setPageCount] = useState(0);
   // Here we use item offsets; we could also use page offsets
   // following the API or data you're working with.
   const [itemOffset, setItemOffset] = useState(0);

   let itemsPerPage = 9;

   useEffect(() => {
      // Fetch items from another resources.
      let endOffset = itemOffset + itemsPerPage;
      setCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
   }, [ itemOffset , itemsPerPage]);

  // Invoke when user click to request another page.
   const handlePageClick = (event : any) => {
      const newOffset = event.selected * itemsPerPage % data.length;
      setItemOffset(newOffset);
   };

   return (
      <>
         {currentItems && currentItems.map((product: any) => {
            return(
               <div className="col-md-4 px-2" key={product.id}>
                  <Card>  
                     <CardBody>
                        <CardImg src={product.url} alt="image illustration" />
                        <CardTitle tag="h6">
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

         <div style={{width: '100%' , display: "flex", 
            justifyContent: 'center', 
            WebkitJustifyContent: 'center',
            marginTop: '1rem'
         }}>
            <ReactPaginate
               nextLabel="next >"
               onPageChange={handlePageClick}
               pageRangeDisplayed={2}
               marginPagesDisplayed={2}
               pageCount={pageCount}
               previousLabel="< previous"
               pageClassName="page-item"
               pageLinkClassName="page-link"
               previousClassName="page-item"
               previousLinkClassName="page-link"
               nextClassName="page-item"
               nextLinkClassName="page-link"
               breakLabel="..."
               breakClassName="page-item"
               breakLinkClassName="page-link"
               containerClassName="pagination"
               activeClassName="active"
               renderOnZeroPageCount={undefined}
            />
         </div>
      </>
   );
};

export default PaginationComponent;