import * as React from "react";
import * as $ from "jquery";

interface P {
}
interface S {
    latestPost: string;
}

export class RealTime extends React.Component<P,S> {
    constructor(props: P){
        super(props);
        this.state = {'latestPost': ''};
    }
    handleLatestPost(data){
        const text = 'P.N. ' + data.author + " さん < " + data.text;
        this.setState({'latestPost': text});
    };
    loadLatestPostFromServer = function(){
        $.ajax({
            url: 'http://localhost:3000/api/latestPost',
            dataType: 'json',
            cache: false,
            success: this.handleLatestPost.bind(this),
            error: function(xhr, status, err) {
                console.error('/api/latestPost', status, err.toString());
            }.bind(this)
        });
    };
    componentDidMount = function(){
        this.loadLatestPostFromServer();
        setInterval(this.loadLatestPostFromServer, 2000);
    };
  render(): React.ReactElement<any> {
    return (
      <div>
        <div className="real-time">
          <h2>みんなの“きゅん”</h2>
            <p>{this.state.latestPost}</p>
        </div>
      </div>
    );
  }
}
