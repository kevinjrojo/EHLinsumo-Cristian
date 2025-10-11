import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import Link from "next/link";

export function NavbarAccordion() {
  return (
    <Accordion>
      <AccordionPanel>
        <AccordionTitle className="navbar-custom ">Herramientas</AccordionTitle>
        <AccordionContent className="navbar-custom">
          <p className="mb-2 ">
            <Link href={"#"}>Pinzas</Link>
          </p>
          <p className="mb-2 ">
            <Link href={"#"}>Destornilladores</Link>
          </p>
          <p className="mb-2 ">
            <Link href={"#"}>Martillos</Link>
          </p>
          <p className="mb-2 ">
            <Link href={"#"}>Llaves</Link>
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle className="navbar-custom">Hogar</AccordionTitle>
        <AccordionContent className="navbar-custom">
          <p className="mb-2 ">
            <Link href={"#"}>Baño</Link>
          </p>
          <p className="mb-2 ">
            <Link href={"#"}>Dormitorios</Link>
          </p>
          <p className="mb-2 ">
            <Link href={"#"}>Cocina</Link>
          </p>
          <p className="mb-2 ">
            <Link href={"#"}>Exterior</Link>
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle className="navbar-custom">Electros</AccordionTitle>
        <AccordionContent className="navbar-custom">
          <p className="mb-2 ">
            <Link href={"#"}>Hornos</Link>
          </p>
          <p className="mb-2 ">
            <Link href={"#"}>Ventiladores</Link>
          </p>
          <p className="mb-2 ">
            <Link href={"#"}>Cafeteras</Link>
          </p>
          <p className="mb-2 ">
            <Link href={"#"}>Aires</Link>
          </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
}
