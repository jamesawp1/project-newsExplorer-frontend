export default function NewsCardList() {
  return(
    {cards && (
      <ul className="gallery">
        {cards.map((card) => (
          <Card key={card._id} card={card}/>)
        )}
      </ul>
    )};
  );
}