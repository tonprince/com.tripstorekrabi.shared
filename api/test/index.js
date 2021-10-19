import { test } from "shared/utils";

export default async (req, res) => {
  res.json({ date: test() });
}