import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState(); //CartState hook'u ile ürünler ve filtreleme ile ilgili durumlar alınır.

  const transformProducts = () => {
    let sortedProducts = products;

    // Seçili filtre kriterlerine göre ürünlerin filtrelenmesi ve listelenmesi.
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    // byStock değişkeni kontrol ediliyor. Eğer byStock false ise (stokta olmayan ürünler filtrelenmek isteniyorsa), aşağıdaki filtreleme işlemi yapılır.
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }
    // byFastDelivery değişkeni kontrol ediliyor. Eğer bu değişken true ise, hızlı teslimatı olan ürünler filtrelenmek üzere işaretlenmiştir.
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }
    // byRating değişkeni kontrol ediliyor. Bu değişken, filtreleme için minimum yıldız sayısını belirtir.
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }
    // searchQuery değişkeni kontrol ediliyor. Eğer bu değişken tanımlıysa, arama sorgusuna göre bir filtreleme yapılacak.
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }
    // Filtreleme ve sıralama işlemlerinden sonra elde edilen sortedProducts dizisi döndürülüyor.
    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
