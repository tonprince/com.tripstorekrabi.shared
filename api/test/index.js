import { test } from "shared/utils.js";

export default async (req, res) => {
  res.json({ date: test() });
}