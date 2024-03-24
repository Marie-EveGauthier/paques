import Wrapper from "./Wrapper";
import Paragraph from "./Paragraph";
import Source from "./Source";
import Title from "./Title";

const Day1 = () => {
  return (
    <Wrapper>
      <Title>Voici un des textes de la Bible qui raconte cette histoire:</Title>
      <Paragraph>
        Quand ils s'approchaient de Jérusalem et qu'ils étaient venus à
        Bethphagé au mont des Oliviers, alors Jésus envoya deux disciples en
        leur disant :
        <br />— Allez au village qui est en face de vous. Aussitôt vous
        trouverez une ânesse liée et un ânon avec elle, en les détachant
        amenez-les-moi. Et si quelqu’un vous dit quelque chose vous direz : "Le
        Seigneur en a besoin, et aussitôt il les renverra."
      </Paragraph>
      <Paragraph>
        Tout ceci arriva afin que soit accompli le mot dit par le prophète
        disant :{" "}
        <em>
          "Dites à la fille de Sion : Voici que ton roi vient à toi doux et
          monté sur une ânesse et sur un ânon fils de bête de somme."
        </em>
      </Paragraph>
      <Paragraph>
        Les disciples allèrent et firent comme Jésus leur avait prescrit. Ils
        amenèrent l’ânesse et l’ânon, posèrent sur eux leurs manteaux et il
        s’assit au-dessus d'eux.
      </Paragraph>
      <Paragraph>
        La foule nombreuse étendit ses manteaux sur le chemin, d’autres
        coupaient des branches des arbres et les étendaient sur le chemin.
      </Paragraph>
      <Paragraph>
        Les foules qui le précédaient et qui suivaient criaient en disant :
        <br />— Hosanna au Fils de David ! Béni celui qui vient au nom du
        Seigneur ! Hosanna dans les hauteurs !
      </Paragraph>
      <Paragraph>
        Comme il entrait dans Jérusalem, toute la ville fut secouée, disant :
        <br />— Qui est celui-ci ?
      </Paragraph>
      <Paragraph>
        Les foules disaient :
        <br />— Celui-ci c'est Jésus, le prophète de Nazareth en Galilée.
      </Paragraph>
      <Source>
        Chapitre 21, versets 1 à 10 de l'Évangile selon Saint Matthieu, dans le
        Nouveau Testament.
      </Source>
    </Wrapper>
  );
};

export default Day1;
