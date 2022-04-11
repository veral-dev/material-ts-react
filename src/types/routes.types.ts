export default interface IRoute {
  path: string
  name: string
  exact: boolean
  component: React.ElementType
  props?: unknown
}
