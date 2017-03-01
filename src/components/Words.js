import React, { PropTypes } from 'react'
import * as d3 from 'd3'

class Words extends React.Component {
  render() {
    if(this.props.words){
      let dataset = {
        "children": this.props.words.slice(0,30)
      }

       //testing d3 stuff
      let diameter = 600;
      let color = d3.scaleOrdinal(d3.schemeCategory20);
      let bubble = d3.pack(dataset)
        .size([diameter, diameter])
        .padding(1.5);

      d3.select("svg").remove()
      let svg = d3.select("p")
        .append("svg")
        .style("width", 600)
        .style("height", 600);

      d3.select(self.frameElement)
        .style("height", diameter + "px");

      let nodes = d3.hierarchy(dataset)
        .sum(function(d) { return d.relevance_score; });

      let node = svg.selectAll(".node")
         .data(bubble(nodes).descendants())
         .enter()
         .filter(function(d){
             return  !d.children
         })
         .append("g")
         .attr("class", "node")
         .attr("transform", function(d) {
             return "translate(" + d.x + "," + d.y + ")";
         });

      let tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .text("test");

      node.append("circle")
          .attr("r", function(d) {
              return d.r;
          })
          .style("fill", function(d) {
              return color(10);
          })
          .on("mouseover", function(d){
          console.log( d.data.examples[0].context)
           tooltip.text( d.data.examples[0].context )
           return tooltip.style("visibility", "visible");
        })
        .on("mouseout", function(){return tooltip.style("visibility", "hidden");});

      node.append("text")
          .attr("dy", ".3em")
          .style("text-anchor", "middle")
          .text(function(d) {
              return d.data.symbol;
          })
      node.append("text")
          .attr("dy", ".3em")
          .attr("y", 15 )
          .style("text-anchor", "middle")
          .text(function(d) {
              return (d.data.relevance_score + '').slice(0,3);
          });
     }
      return (
          <div>
          </div>
    )
  }
}

Words.propTypes = {
  words: PropTypes.array.isRequired
}

export default Words
