class MathUtils {
  async calculateDistance(x1, y1, x2, y2) {
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
  }

  async calculateAngle(x1, y1, x2, y2) {
    const angle = Math.atan2(y2 - y1, x2 - x1);
    return angle;
  }
}

export default new MathUtils();
