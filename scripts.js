// GRUPO:  - LINCOLN DIOGO
//         - LUCAS EMANUEL
//         - LAYLA RAMOS
//         - LUCAS LESSA
//         - LUCAS EMANUEL
//         - GIZELLE GABRIELE

// Script para carregar os detalhes do produto na página de produto
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const products = {
    1: {
      name: "Mouse Gamer",
      price: "R$ 439,00",
      image: "https://via.placeholder.com/300",
      stock: 13,
    },
    2: {
      name: "Mouse Gamer",
      price: "R$ 439,00",
      image: "https://via.placeholder.com/300",
      stock: 13,
    },
    3: {
      name: "Mouse Gamer",
      price: "R$ 439,00",
      image: "https://via.placeholder.com/300",
      stock: 13,
    },
    4: {
      name: "Mouse Gamer",
      price: "R$ 439,00",
      image: "https://via.placeholder.com/300",
      stock: 13,
    },
    5: {
      name: "Mouse Gamer",
      price: "R$ 439,00",
      image: "https://via.placeholder.com/300",
      stock: 13,
    },
    6: {
      name: "Mouse Gamer",
      price: "R$ 439,00",
      image: "https://via.placeholder.com/300",
      stock: 13,
    },
    7: {
      name: "Mouse Gamer",
      price: "R$ 439,00",
      image: "https://via.placeholder.com/300",
      stock: 13,
    },
    8: {
      name: "Mouse Gamer",
      price: "R$ 439,00",
      image: "https://via.placeholder.com/300",
      stock: 13,
    },
    9: {
      name: "Mouse Gamer",
      price: "R$ 439,00",
      image: "https://via.placeholder.com/150",
      stock: 13,
    },
    10: {
      name: "Mouse Gamer",
      price: "R$ 439,00",
      image: "https://via.placeholder.com/300",
      stock: 13,
    },

    // Adicione mais produtos aqui com base no ID
  };

  if (productId && products[productId]) {
    const product = products[productId];
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-name").innerText = product.name;
    document.getElementById("product-price").innerText = product.price;
    document.getElementById(
      "product-stock"
    ).innerHTML = `Estoque disponível: <strong>${product.stock} em estoque</strong>`;
  } else {
    alert("Produto não encontrado.");
  }
});
