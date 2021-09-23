import express, { Express, Request, Response } from "express";
import cors from "cors";
import { countries, country } from "./countries";

const app: Express = express();

app.use(express.json());
app.use(cors());

//endpoint 1
app.get("/countries", (req: Request, res: Response) => {
  const result = countries.map((country: country) => {
    return { id: country.id, name: country.name };
  });

  res.status(200).send(result);
});

//endpoint 3
app.get("/countries/search", (req: Request, res: Response) => {
  let result: country[] = countries;
  try {
    if (!req.query.name && !req.query.capital && !req.query.continent) {
      throw new Error("Invalid Parameters");
    }
    if (req.query.name) {
      result = result.filter((country) =>
        country.name.includes(req.query.name as string)
      );
    }

    if (req.query.capital) {
      result = result.filter((country) =>
        country.capital.includes(req.query.capital as string)
      );
    }

    if (req.query.continent) {
      result = result.filter((country) =>
        country.continent.includes(req.query.continent as string)
      );
    }
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//endpoint 2, mais para baixo pela prioridade
app.get("/countries/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const result: country | undefined = countries.find(
      (country) => country.id === Number(req.params.id)
    );

    if (!result) {
      errorCode = 404;
      throw new Error();
    }
    //deu tudo certo
    res.status(200).send(result);
  } catch (error) {
    //deu tudo errado
    console.log(error);
    res.status(errorCode).send(error.message);
  }
});

//endpoint 4
app.post("/countries/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;
  //inicio de um sonho
  try {
    const countryIndex: number = countries.findIndex(
      (country) => country.id === Number(req.params.id)
    );

    if (countryIndex === -1) {
      errorCode = 404;
      throw new Error();
    }

    if (!req.body.name && !req.body.capital) {
      throw new Error("Invalid Parameters");
    }

    if (req.body.name) {
      countries[countryIndex].name = req.body.name;
    }
    if (req.query.capital) {
      countries[countryIndex].capital = req.body.capital;
    }

    //deu tudo certo
    res.status(200).send("Country successfully updated");
  } catch (error) {
    //deu tudo errado
    console.log(error);
    res.status(errorCode).send(error.message);
  }
});