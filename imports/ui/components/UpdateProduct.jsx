import React, {Component} from 'react';
import Loading from '/imports/ui/components/Main/Loading.jsx';

export default class UpdateProduct extends Component {

  render() {

      if(this.props.loading) {
          return <Loading />
      }

      else {
          let {_id, name, photo, price, flavor, volume} = this.props.product;
          const submitProduct = () => {
            let name = this.refs.name.value.trim();
            let photo = this.refs.photo.value.trim();
            let price = this.refs.price.value;
            // let flavor = this.refs.flavor.value.trim();
            // let volume = this.refs.volume.value.trim();

          console.log('name', name);
          console.log('volume', volume);
          console.log('price', price);

          let product = {
            name: name,
            photo: photo,
            price: price,
            // flavor: flavor,
            // volume: volume
          }

          Meteor.call("updateProduct", _id,  product, function(error, result){
            if(result === 'success'){
                    console.warn("successful");
            }
            else{
              console.warn("error");
              return;
            }
          });

        }

        return (
          <div>
            <input ref="name" type="text" defaultValue={name} placeholder="Enter Name"/><br/>
            {/* <input ref="volume" type="text" defaultValue={volume} placeholder="Enter Volume"/><br/> */}
            <input ref="price" type="number" defaultValue={price} placeholder="Enter Price"/><br/>
            <button onClick={submitProduct}>Submit</button>
          </div>
        )
    }
  }
}
