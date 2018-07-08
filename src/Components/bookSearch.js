import React, { Component } from 'react'

class bookSearch extends Component {
    constructor(props) {
        super(props)
    this.state={
        books:[]
    }
    this.add = this.add.bind(this)
    }

    add(books) {
        this.setState(prevState => ({
          books: [
          ...prevState.books,
          {
            name: books.Name,
            author: books.Author
          }]
        }))
      }

      componentWillMount(){
        const url = "https://amazon-book.herokuapp.com/getBookDetailsByAuthor/Russian/Vladimir%20Petrovsky";
        fetch(url).then((res) => { 
            return res.json() 
        }).then((data) => {
             var self=this;
               self.add(data);
              });
      }

      eachIdea (books,i) {
        return (   
          <div className="row align-items-center" key={'books' +i} index={i}>
            <div className="card" style={{"width": 20 + 'rem'}}>    
                <div className="card-body">
                    <h5 className="card-title">{books.name}</h5>
                    <p>author:{books.author}</p>
                </div>
            </div>
            </div>
          )
      }

    render() {
        return (
             <div className="ideaList">
          {this.state.books.map(this.eachIdea)}
        </div>
        )
    }
}
export default bookSearch;