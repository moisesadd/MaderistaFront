import React, { useState, useEffect } from 'react';
import Input from '../UI/Input';
import TextArea from '../UI/TextArea';
import Button from '../UI/Button';
import './ProductForm.css'; 

/**
 * @param {object} props - Propiedades del componente.
 * @param {function} props.onAddProduct - Callback para añadir un nuevo producto.
 * @param {object} [props.productToEdit] - Objeto de producto si se está editando (opcional).
 * @param {function} [props.onUpdateProduct] - Callback para actualizar un producto existente.
 */
const ProductForm = ({ onAddProduct, productToEdit, onUpdateProduct }) => {
  // Estado para cada campo del formulario. Se inicializan con valores del producto a editar si existe.
  const [name, setName] = useState(productToEdit ? productToEdit.name : '');
  const [description, setDescription] = useState(productToEdit ? productToEdit.description : '');
  const [price, setPrice] = useState(productToEdit ? productToEdit.price : '');
  const [image, setImage] = useState(productToEdit ? productToEdit.image : '');
  const [isValid, setIsValid] = useState(false); // Estado para la validación del formulario

  // useEffect para revalidar el formulario cuando los campos cambian.
  // Se ejecuta cada vez que 'name', 'description' o 'price' cambian.
  useEffect(() => {
    // Validación básica: nombre, descripción y precio no vacíos, y precio un número positivo.
    setIsValid(
      name.trim() !== '' &&
      description.trim() !== '' &&
      !isNaN(parseFloat(price)) && // parseFloat para manejar strings numéricos
      parseFloat(price) > 0
    );
  }, [name, description, price]); // Dependencias del efecto

  /**
   * Maneja el envío del formulario.
   * @param {Event} event - El evento de envío del formulario.
   */
  const handleSubmit = (event) => {
    event.preventDefault(); 

    if (!isValid) {
      alert('Por favor, completa todos los campos obligatorios y asegúrate de que el precio sea un número positivo.');
      return;
    }

    const productData = {
      name,
      description,
      price: parseFloat(price), // Convierte el precio a un número de punto flotante
      image,
    };

    if (productToEdit) {
      // Si estamos en modo edición, llamamos a onUpdateProduct incluyendo el ID
      onUpdateProduct({ ...productData, id: productToEdit.id });
    } else {
      // Si estamos añadiendo un nuevo producto, llamamos a onAddProduct
      onAddProduct(productData);
      // Limpiar el formulario después de añadir un nuevo producto
      setName('');
      setDescription('');
      setPrice('');
      setImage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h3>{productToEdit ? 'Editar Producto' : 'Registrar Nuevo Producto'}</h3>
      <Input
        label="Nombre del Producto"
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Ej: Mesa"
      />
      <TextArea
        label="Descripción Breve"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        rows="3"
        placeholder="Ej: Mesa de madera maciza."
      />
      <Input
        label="Precio ($)"
        id="price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        placeholder="Ej: 200"
        min="0" // Asegura que el precio no sea negativo en el input
      />
      <Input
        label="URL de la Imagen (Opcional)"
        id="image"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Ej: https://ejemplo.com/imagen.jpg"
      />
      <Button type="submit" disabled={!isValid}>
        {productToEdit ? 'Actualizar Producto' : 'Registrar Producto'}
      </Button>
    </form>
  );
};

export default ProductForm;