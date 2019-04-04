import React, { Component } from 'react'
import { Query } from 'react-apollo'

import category from '../graphql/category.graphql'
<<<<<<< HEAD
import StyledLink, { StyledLinkProps } from './StyledLink'
=======
import MenuItem from '../MenuItem'
import SubMenu from '../Submenu'
import StyledLink from './StyledLink'
import Menu from '../Menu';
>>>>>>> Use categoryId to decide when to render children

class CategoryItem extends Component<CategoryItemProps, State> {
  public static getDerivedStateFromError() {
    return { hasError: true }
  }

  public state = { hasError: false }

  public componentDidCatch(error: any) {
    console.log({ error })
  }

  public render() {
<<<<<<< HEAD
    const { categoryId, text, ...rest } = this.props
=======
    const {
      categoryId,
      text,
      typography,
      isHovered,
      highlight,
      showChildrenCategory = 16,
    } = this.props
>>>>>>> Use categoryId to decide when to render children

    if (this.state.hasError) {
      return null
    }

    return (
      <Query query={category} variables={{ id: categoryId }}>
        {({ data, loading, error }) => {
          if (error) {
            throw new Error(
              `GraphQL error while rendering Menu rendered Category id ${categoryId}`
            )
          }

          if (loading) {
            // TODO: Add a ContentLoader here
            return null
          }

          const {
            category: { name, titleTag, href },
          } = data

          return (
            <StyledLink
              {...rest}
              title={titleTag}
              to={href}>
              {text ? text : name}
            </StyledLink>
          )
        }}
      </Query>
    )
  }
}

export interface CategoryItemProps extends CategoryItemSchema, StyledLinkProps {}

export interface CategoryItemSchema {
  categoryId: number
  text: string
}

interface State {
  hasError: boolean
}

export default CategoryItem
