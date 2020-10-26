import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Input,
} from "@material-ui/core";
import { getLabelByValue } from "../../common/utils";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const FilterSelect = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <FormControl className={classes.formControl} fullWidth>
      <InputLabel>{"Filtro de " + props.inputLabel}</InputLabel>
      <Select
        multiple
        fullWidth
        value={props.value}
        onChange={props.changed}
        input={<Input id={props.inputLabel} />}
        renderValue={(selected) => (
          <div className={classes.chips}>
            {selected.map((value, key) => (
              <Chip
                key={key}
                label={getLabelByValue(props.options, value)}
                className={classes.chip}
              />
            ))}
          </div>
        )}
        MenuProps={MenuProps}
      >
        {props.options.map((opt, key) => (
          <MenuItem
            key={key}
            value={opt.value}
            style={getStyles(opt, props.value, theme)}
          >
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterSelect;
