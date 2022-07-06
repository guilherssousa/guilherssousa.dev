import type { NextPage } from "next";
import Head from "next/head";

import Container from "components/container";
import Heading from "components/heading";
import Section from "components/section";

const Contact: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Contato | Guilherme Sousa</title>
      </Head>
      <Section>
        <Heading title="Vamos conversar?" />
        <p>
          Tem uma ideia e gostaria de botar em prática? Quer dar feedbacks sobre
          alguma postagem? Deseja falar sobre Pokemóns? Entre em contato comigo!
        </p>

        <form name="contact" method="POST" data-netlify="true" className="mt-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="w-full rounded-lg  bg-stone-800 px-4 py-2">
              <label htmlFor="name">
                <input
                  className="w-full bg-transparent outline-none border-0 ring-0 placeholder:text-stone-500"
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                />
              </label>
            </div>
            <div className="w-full rounded-lg  bg-stone-800 px-4 py-2">
              <label htmlFor="email">
                <input
                  className="w-full bg-transparent outline-none border-0 ring-0 placeholder:text-stone-500"
                  type="email"
                  name="email"
                  placeholder="Seu endereço de email"
                />
              </label>
            </div>
          </div>
          <div className="w-full rounded-lg mt-4 bg-stone-800 px-6 py-4">
            <label>
              <textarea
                className="h-32 w-full bg-transparent outline-none border-0 ring-0 placeholder:text-stone-500"
                name="message"
                placeholder="Sobre o que quer falar hoje?"
              />
            </label>
          </div>
          <div className="w-full mt-6 flex justify-end">
            <button
              className="bg-orange-900 text-orange-300 font-bold px-4 py-2 rounded-lg"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </Section>
    </Container>
  );
};

export default Contact;
