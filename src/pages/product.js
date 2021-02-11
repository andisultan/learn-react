import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Site from "layouts/site";
import Container from "components/container";
import FormItem from "components/form-item";
import Button from "components/button";
// actions 
import { productFetch, productCreate } from "redux/actions/product";

const PageProduct = ({ products, productFetch }) => {
  const [title, setTitle] = useState();
  const [weight, setWeight] = useState();
  const [qty, setQty] = useState();
  const [price, setPrice] = useState();
  const [priceCoret, setPriceCoret] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();

  useEffect( () => {
    productFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();
    const params = { title, weight, qty, price, priceCoret, description, image };
    productCreate(params)
    console.log(params);
  }

  return (
    <Site>
      <Container>
        {!products.loading && 
          products.data.map( data => {
            return <p key={data.id}>{data.title}</p>
          })}
        <form onSubmit={onSubmit}>
          <FormItem>
            <label htmlFor="title">Title</label>
            <input 
              type="text" 
              name="title" 
              id="title" 
              value={title}
              onChange={ (e) => setTitle(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <label htmlFor="weight">Weight</label>
            <input 
              type="tel" 
              name="weight" 
              id="weight"
              value={weight}
              onChange={ (e) => setWeight(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <label htmlFor="weight">Weight</label>
            <input 
              type="tel" 
              name="weight" 
              id="weight"
              value={weight}
              onChange={ (e) => setWeight(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <label htmlFor="qty">Qty</label>
            <input 
              type="tel" 
              name="qty" 
              id="qty"
              value={qty}
              onChange={ (e) => setQty(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <label htmlFor="price">Price</label>
            <input 
              type="tel" 
              name="price" 
              id="price"
              value={price}
              onChange={ (e) => setPrice(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <label htmlFor="priceCoret">Price Coret</label>
            <input 
              type="tel" 
              name="priceCoret" 
              id="priceCoret"
              value={priceCoret}
              onChange={ (e) => setPriceCoret(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <label htmlFor="description">Description</label>
            <textarea 
              name="description" 
              id="description"
              value={priceCoret}
              onChange={ (e) => setDescription(e.target.value)}></textarea>
          </FormItem>
          <FormItem>
            <label htmlFor="image">Image</label>
            <input 
              type="file" 
              name="image" 
              id="image"
              value={image}
              onChange={ (e) => setImage(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Button type="submit">Submit Product</Button>
          </FormItem>
        </form>
      </Container>
    </Site>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.productReducer
  }
}

export default connect(mapStateToProps, { productFetch })(PageProduct);