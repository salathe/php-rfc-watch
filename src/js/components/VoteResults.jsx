var React = require('react');

module.exports = React.createClass({
    renderVote: function (vote, idx) {
        var share = Math.round(vote.share * 100, 2);
        return <li>{vote.option}: {vote.votes} ({share}%)</li>;
    },
    renderVoteProgress: function (vote, idx) {
        var opt = vote.option.toLowerCase();
        var color = (opt.indexOf('yes') == 0)
            ? 'green'
            : (opt.indexOf('no') == 0 ? 'red' : 'orange');
        var style = {
            width: Math.round(vote.share * 100, 2) + "%",
            backgroundColor: color
        };
        return <div className="progress-bar" style={style}></div>
    },
    computeTotalVotesCasted: function () {
        var total = 0;
        for (var i = 0; i < this.props.results.length; i++) {
            total += this.props.results[i].votes;
        }
        return total;
    },
    render: function () {
        return (
            <div>
                <div className="vote-results">
                    {this.props.results.map(this.renderVoteProgress)}
                </div>

                <ul>
                    <li>Votes cast: {this.computeTotalVotesCasted()}</li>
                    {this.props.results.map(this.renderVote)}
                </ul>
            </div>
        );
    }
});
