import { test } from "utils";

export default async (req, res) => {
  res.json({ date: test() });
}