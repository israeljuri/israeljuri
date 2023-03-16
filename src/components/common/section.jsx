import { Grid } from "@chakra-ui/react";

const Section = (props) => {
  const { col, row, children } = props;
  return (
    <Grid gridTemplateColumns={col} gridTemplateRows={row} {...props}>
      {children}
    </Grid>
  );
};

export default Section;
