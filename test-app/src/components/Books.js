import React from "react";
class Books extends React.Component {
  //settings and state
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      hits: []
    };
  }

  //when the compent has mounted (loaded) we want to perform our ajax call
  componentDidMount() {
    // console.log("did mount");
    fetch("https://hn.algolia.com/api/v1/search?query=")
      .then(res => res.json()) //fetching the json

      //update the state with the info from the api
      .then(
        result => {
          this.setState({
            isLoaded: true,
            hits: result.hits
          });
        },
        //error function
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, hits } = this.state;
    //check if error
    if (error) {
      return <div>Error: {error.message} </div>;
    } else if (!isLoaded) {
      //if its true that is has loaded
      return <div>Loading..</div>;
    } else {
      // returns the content from the api and iterates over each object to allow me access to the info (hit is my varibale name for the instance of each index)
      return (
        <div className="books-wrapper">
          <ul>
            {hits.map(hit => (
              <li key={hit.objectID}>
                <h2>{hit.title} </h2>
                <p>{hit.author} </p>
                <a href={hit.url}>{hit.url} </a>
              </li>
            ))}
          </ul>;
        </div>
      );
    }
  }
}

export default Books;
