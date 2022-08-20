import { Ranking } from '../../components';

export async function getStaticProps(context) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/ranking/1`);
  const response = await res.json();
  const totalPage = response.data.totalUsers / response.data.userPerPage + 1;
  return {
    props: { ranking: response.data, page: 1, totalPage: parseInt(totalPage) },
  };
}

export default function index(props) {
  return <Ranking data={props.ranking} page={1} totalPage={props.totalPage} />;
}
