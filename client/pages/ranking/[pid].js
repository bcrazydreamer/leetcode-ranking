import { Ranking } from '../../components';

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/ranking/${params.pid}`);
  const response = await res.json();
  const totalPage = response.data.totalUsers / response.data.userPerPage + 1;
  return {
    props: { ranking: response.data, page: Number(params.pid), totalPage: parseInt(totalPage) },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/ranking/1?pageInfo=true`);
  const response = await res.json();
  const data = response.data;
  let totalUser = data.totalUsers || 0;
  let userPerPage = data.userPerPage || 0;
  let paths = [];
  if (userPerPage !== 0 && totalUser !== 0) {
    for (let i = 1; i <= totalUser / userPerPage + 1; i++) {
      paths.push({ params: { pid: i + '' } });
    }
  }
  return {
    paths,
    fallback: false,
  };
}

export default function Home(props) {
  return <Ranking data={props.ranking} page={props.page} totalPage={props.totalPage} />;
}
