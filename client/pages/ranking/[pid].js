import { Ranking } from '../../components';

export async function getStaticProps(context) {
  const { params } = context;
  let response;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/ranking/${params.pid}`);
    response = await res.json();
  } catch (err) {
    response = { data: { totalUsers: 0, userPerPage: 0, rankingNodes: [] } };
  }
  let totalPage = response.data.totalUsers / response.data.userPerPage + 1;
  totalPage = totalPage > 2000 ? 2000 : totalPage;
  return {
    props: { ranking: response.data, page: Number(params.pid), totalPage: parseInt(totalPage) },
  };
}

export async function getStaticPaths() {
  let response;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/ranking/1?pageInfo=true`);
    response = await res.json();
  } catch (err) {
    response = { data: { totalUsers: 0, userPerPage: 0, rankingNodes: [] } };
  }
  const data = response.data;
  let totalUser = data.totalUsers || 0;
  let userPerPage = data.userPerPage || 0;
  let paths = [];

  let totalPage = totalUser / userPerPage + 1;
  totalPage = totalPage > 2000 ? 2000 : totalPage;

  if (userPerPage !== 0 && totalUser !== 0) {
    for (let i = 1; i <= totalPage; i++) {
      paths.push({ params: { pid: i + '' } });
    }
  }
  return {
    paths,
    fallback: false,
  };
}

export default function Home(props) {
  return <Ranking data={props?.ranking} page={props?.page} totalPage={props?.totalPage} />;
}
