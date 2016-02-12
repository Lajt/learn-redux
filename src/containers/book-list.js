import React,{ Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList(){
      return this.props.books.map((book) => {
        return (
          <li key={book.title} className="list-group-item">{book.title}</li>
          );
      });
    }
    
  render(){
    return(
      <ul clasName="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  // Whatever is returned will show up as pros inside of BookList
  // this.props.books = returned books from this function
  return{
    books: state.books
  };
  
}

// produce container
export default connect(mapStateToProps)(BookList);