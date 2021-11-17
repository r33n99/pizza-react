import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categories, Sort, ItemsBlock,LoadingBlock } from "../Components/imports";
import { addPizzaToCart } from "../redux/actions/cart";
import { setCategory, setSortBy } from "../redux/actions/filtres";
import { fetchPizzas } from "../redux/actions/pizzas";

function Home() {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filtres }) => filtres);
  const cartItems = useSelector(({ cart }) => cart.items);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddOnCart = (obj) => {
    dispatch(addPizzaToCart(obj))
  }

  const categotyNames = [
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const sortItems = [
    { name: "популярности", type: "rating", order: "desc" },
    { name: "цене", type: "price", order: "desc" },
    { name: "алфавиту", type: "name", order: "asc" },
  ];

  return (
    <>
      <div className="content__top">
        <Categories
          onSelectCategory={onSelectCategory}
          items={categotyNames}
          activeCategory={category}
        />
        <Sort
          onSelectSortType={onSelectSortType}
          sortBy={sortBy.type}
          sortItems={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((el) => (
              <ItemsBlock
                isLoaded
                onClickCartItems={handleAddOnCart}
                key={el.id}
                {...el}
                addedCount={cartItems[el.id]  && cartItems[el.id].items.length} 
              />
            ))
          : items.fill().map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </>
  );
}

export default Home;
