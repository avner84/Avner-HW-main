const _R_E = React.createElement



function App() {
   const products = [
      { id: 1, name: "Product1" },
      { id: 2, name: "Product2" },
      { id: 3, name: "Product3" },
      { id: 4, name: "Product4" },
      { id: 5, name: "Product5" },
      { id: 6, name: "Product6" },
   ]

   return (
      _R_E("div", {}, [
         _R_E("h1", {}, "Hello world"),
         _R_E("p", {}, "Learn React Without JSX"),
         _R_E(ProductsList, { products: products }, null),
      ])
   )
}


function Card(props) {
   return (
      _R_E("div", { className: "card" }, props.children)
   )
}


class ProductsList extends React.Component {

   constructor(props) {
      super(props)

      this.state = {
         products: props.products,
         inputRef: React.createRef()
      }

      // this.onDelete = this.onDelete.bind(this)
   }

   onDelete(id) {
      this.setState((prev) => {
         return {
            products: prev.products.filter((p) => p.id !== id)
         }
      })
   }

   onAdd() {
      const newProduct = {
         id: Math.floor(Math.random() * 10000000),
         name: this.state.inputRef.current.value
      }

      this.setState((prev) => {
         return {
            products: [newProduct, ...prev.products]
         }
      })
   }

   onEdit(id, value) {
      this.setState((prev) => {
         const index = prev.products.findIndex((p) => p.id === id)
         prev.products[index].name = value
         return {
            products: [...prev.products]
         }
      })
   }

   render() {
      return (
         _R_E("div", {}, [
            _R_E("h1", {}, "Products List", null),
            _R_E("input", { ref: this.state.inputRef }, null),
            _R_E("button", { onClick: this.onAdd.bind(this) }, "Add Product"),
            _R_E("div", { className: "products_list" }, this.state.products.map((p) => {
               return _R_E(Card, {}, _R_E(Product, {
                  name: p.name,
                  id: p.id,
                  onDelete: this.onDelete.bind(this, p.id),
                  onEdit: this.onEdit.bind(this),
               }, null))
            }))
         ])
      )
   }
}


class Product extends React.Component {

   constructor(props) {
      super(props)

      this.state = {
         isEdit: false,
         inputRef: React.createRef()
      }
   }

   onToggleEdit() {
      this.setState((prev) => {
         return {
            isEdit: !prev.isEdit,
         }
      })
   }

   onSaveUpdate() {
      this.setState((prev) => {
         return {
            isEdit: !prev.isEdit
         }
      })

      this.props.onEdit(this.props.id, this.state.inputRef.current.value)
   }

   render() {
      return (
         _R_E("div", { className: "product_item" }, [
            _R_E("h1", {}, this.props.id),
            _R_E("p", {}, this.props.name),
            _R_E("button", { onClick: this.props.onDelete }, "Delete"),
            this.state.isEdit ? _R_E("div", {}, [
               _R_E("input", { ref: this.state.inputRef }, null),
               _R_E("button", { onClick: this.onSaveUpdate.bind(this) }, "Save")
            ]) : _R_E("button", { onClick: this.onToggleEdit.bind(this) }, "Edit"),
         ])
      )
   }
}





ReactDOM
   .createRoot(document.getElementById('root'))
   .render(_R_E(App))