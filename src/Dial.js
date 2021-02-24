import makerjs from 'makerjs';

function Dial
    (rectangleLength,rectangleWidth,range,outerRadius,innerRadius,startAngle,EndAngle)
    {
		var defaultValues = makerjs.kit.getParameterValues(Dial);//get meta parameters
        rectangleLength = defaultValues.shift();
        rectangleWidth = defaultValues.shift();
        range = defaultValues.shift();
        outerRadius = defaultValues.shift();
        innerRadius = defaultValues.shift();
        startAngle = defaultValues.shift();
        EndAngle = defaultValues.shift();

        var rectangleModel = new makerjs.models.Rectangle(rectangleWidth,rectangleLength); //create rectangle
        var outerRadiusModel = new makerjs.paths.Arc( [0, 0],outerRadius,startAngle,EndAngle ); //Create arc1
        var innerRadiusModel = new makerjs.paths.Arc([0, 0],innerRadius,startAngle,EndAngle ); //Create arc2
        var rectangleRow = makerjs.layout.cloneToRow(rectangleModel, range, 10); //copy rectangle
        makerjs.layout.childrenOnPath(rectangleRow, innerRadiusModel, 0, true, true); //copy rectangle round arc2
        this.models = {rectangle: rectangleRow}; //display geometry
        this.paths =  {outerRadius: outerRadiusModel, innerRadius: innerRadiusModel}; //display paths
 

  makerjs.model.zero(this);  //move everything to the [0, 0] position

  this.units = makerjs.unitType.Millimeter;//set units

    }

//default parameters
Dial.metaParameters = [
  { title: "Rectangle Length", type: "text", value: 10 },
  { title: "Rectangle Width", type: "text", value: 2 },
  { title: "Range", type: "text", value: 50 },
  { title: "Outer Radius", type: "text", value: 160 },
  { title: "inner Radius", type: "text", value: 150 },
  { title: "Start Angle", type: "text", value: -410 },
  { title: "End Angle", type: "text", value: -130 },
];



//export model
export default Dial;
