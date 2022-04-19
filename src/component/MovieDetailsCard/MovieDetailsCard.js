import {
  Image,
  Article,
  DescriptionDiv,
  Title,
  UserScore,
  VoteS,
  CardSubTitle,
  OverviewText,
  List,
  ListItem,
} from "./MovieDetailsCard.styled";

export const MovieDetailsCard = ({ item }) => {
  const {
    title,
    original_title,
    vote_average,
    overview,
    genres,
    poster_path,
    release_date,
  } = item;
  
  return (
    <>
      <Article>

        <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
        <DescriptionDiv>

          <Title>{title || original_title} ({release_date.slice(0, 4)})</Title>

          <UserScore>
            User score
            <VoteS style={{ backgroundColor: vote_average > 6 ? "#05a500" : "#e93e47" }}>
              {vote_average}
            </VoteS>
          </UserScore>

          <CardSubTitle>Overview</CardSubTitle>
          <OverviewText>{overview}</OverviewText>
          <CardSubTitle>Genres</CardSubTitle>

          <List>{genres.map(({ name, id }) =>
            <ListItem key={id}>{name}</ListItem>)}
          </List>

        </DescriptionDiv>

      </Article>
    </>
  )
};


