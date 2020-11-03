const query = `
  {
    principal {
      content_es {
        principal {
          titulo
          descripcion
        }
        cta_titulo
        cta_vinculo
      }
      content_en {
        principal {
          titulo
          descripcion
        }
        cta_titulo
        cta_vinculo
      }
    }
  }
`

module.exports = query