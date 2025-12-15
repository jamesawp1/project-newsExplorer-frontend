import NewsCardList from "../NewsCardList/NewsCardList";

export default function Main(props) {
  const { onNews, news, isLoading, isSearched, isCatchError } = props;
  return (
    <main className="main">
      <NewsCardList
        news={news}
        isLoading={isLoading}
        isSearched={isSearched}
        isCatchError={isCatchError}
      />
    </main>
  );
}
