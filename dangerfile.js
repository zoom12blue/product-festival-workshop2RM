import { warn, danger } from "danger"
if (!danger.github.pr.body.match(/Resolves \#[0-9]/)) {
  warn('You should link this to an issue by including "Resolves #X" in the body')
}
