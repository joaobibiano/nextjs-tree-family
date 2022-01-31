import { getTrees } from "../services/api";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

interface ITree {
  id: number;
  name: string;
}

export const getStaticProps = async () => {
  const trees: ITree[] = await getTrees();

  return {
    props: {
      trees,
      generatedDate: new Date().toLocaleString(),
    },
    revalidate: 60,
  };
};

// type QuemSomosNosProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function QuemSomosNos(props: any) {
  return (
    <div>
      <p>Data do client {new Date().toLocaleString()}</p>
      <p>Data do servidor {props.generatedDate}</p>

      <h1>Somos uma empresa familiar que cuida da terra</h1>
      {props.trees.map((tree: any) => {
        return <p key={tree.id}>{tree.name}</p>;
      })}
    </div>
  );
}
