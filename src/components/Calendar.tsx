import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";

type CalendarProps = {
  value: any;
  setValue: (a: any) => void;
};

const Calendar = ({ value, setValue }: CalendarProps) => {
  // const [value, setValue] = useState<any>(dayjs());
  // console.log("dayJS", dayjs());

  return (
    <View style={styles.container}>
      <DateTimePicker
        locale="en"
        mode="date"
        value={value}
        onValueChange={(date) => setValue(date)}
      />
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF",
  },
});
