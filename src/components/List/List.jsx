import Card from "@/components/Card/Card";
import useFetch from "@/hooks/useFetch";
import "./List.scss";

const List = ({ catId, maxPrice, subCats, sort }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${catId}
    ${subCats.map((item) => `&[filters][sub_categories][id][$eq]=${item}`)}
    &[filters][price][$lte]=${maxPrice}
    &sort=price:${sort ? sort : "asc"}
    `
  );

  return (
    <div className="list">
      {error
        ? "Something went wrong!"
        : loading
        ? "Loading..."
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
