import { log } from "logger";
import Head from "next/head";
import { Header } from "../components/header";
import { Body } from "../components/body/body";

export default function Home() {
  log("Hey! This is Home.");
  return (
    <>
      <Header />
      <Body />
    </>
  );
}
